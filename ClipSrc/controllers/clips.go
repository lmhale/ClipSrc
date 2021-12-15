package controllers

import (
	"net/http"

	"github.com/gin-gonic/gin"
	"github.com/lmhale/ClipSrc/models"
)

// GET /books
// Get all books
func FindClips(c *gin.Context) {
  var clips []models.Clip
  models.DB.Find(&clips)

  c.JSON(http.StatusOK, gin.H{"data": clips})
}

//validation
type CreateClipInput struct {
	TextSnippet  string `json:"textSnippet" binding:"required"`
	Url string `json:"url" binding:"required"`
	Tag string `json:"tag" binding:"required"`
  }

func CreateClip(c *gin.Context) {
	// Validate input
	var input CreateClipInput
	if err := c.ShouldBindJSON(&input); err != nil {
	  c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
	  return
	}
  
	// Create clip
	clip := models.Clip{TextSnippet: input.TextSnippet, Url: input.Url, Tag:input.Tag}
	models.DB.Create(&clip)
  
	c.JSON(http.StatusOK, gin.H{"data": clip})
  }

  func FindClip(c *gin.Context) {  // Get model if exist
	var clip models.Clip
  
	if err := models.DB.Where("id = ?", c.Param("id")).First(&clip).Error; err != nil {
	  c.JSON(http.StatusBadRequest, gin.H{"error": "Record not found!"})
	  return
	}
  
	c.JSON(http.StatusOK, gin.H{"data": clip})
  }


  func DeleteClip(c *gin.Context) {
	// Get model if exist
	var clip models.Clip
	if err := models.DB.Where("id = ?", c.Param("id")).First(&clip).Error; err != nil {
	  c.JSON(http.StatusBadRequest, gin.H{"error": "Record not found!"})
	  return
	}
  
	models.DB.Delete(&clip)
  
	c.JSON(http.StatusOK, gin.H{"data": true})
  }
package main

import (
	"github.com/gin-contrib/static"
	"github.com/gin-gonic/gin"
	"github.com/lmhale/ClipSrc/controllers"
	"github.com/lmhale/ClipSrc/models"
)


func main() {
    r := gin.Default()
	r.Use(static.Serve("/", static.LocalFile("./public", false)))
	models.ConnectDatabase()
	r.GET("/clips", controllers.FindClips)
	r.POST("/clips", controllers.CreateClip)
	r.GET("/clips/:id", controllers.FindClip)
	r.DELETE("/clips/:id", controllers.DeleteClip)
    r.Run()
}

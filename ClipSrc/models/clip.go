package models

type Clip struct {
	ID uint `json:"id" gorm:"primary_key"`
	Url string `json:"url"`
	TextSnippet string `json:"textSnippet"`
	Tag string `json:"tag"`
}
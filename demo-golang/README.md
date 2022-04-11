Go Modules:
1. Init project dalam folder dengan cara "go mod init nama_project"
2. Jelasin kalo go.mod ini nantinya semacam package manager gitu, jadi kalo kalian make dependencies bakal ke-list di dalem sini
3. Contohin pake "go get github.com/tidwall/gjson" atau module lainnya yang bisa diliat di sini https://pkg.go.dev/ 

Go Package:
1. Konsep package mirip di java, 1 package berarti saling bisa akses walaupun beda file (calculation.go dengan print.go)
2. Beda package perlu import dulu kalo mau akses (calculation.go dengan add.go). Perhatiin agar bisa diakses beda package gunain kapital di depan method/variable
3. package main selalu jadi semacam package utama untuk dijalankan

Latar belakang Go:
Intinya golang merupakan bahasa yang bisa ngasih performance besar dengan cost yang kecil sehingga untuk scaling di sisi service nantinya itu bakal bagus banget

package com.petcare.catshop

import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication

@SpringBootApplication
class WebShopApplication

fun main(args: Array<String>) {
    runApplication<WebShopApplication>(*args)
}

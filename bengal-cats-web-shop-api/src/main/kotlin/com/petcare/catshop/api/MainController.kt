package com.petcare.catshop.api

import com.petcare.catshop.core.CatService
import org.springframework.web.bind.annotation.CrossOrigin
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RestController

@RestController
@CrossOrigin(origins = ["http://localhost:4200"])
class MainController(val service: CatService) {
    @GetMapping("/cats")
    fun cats() = service.findAll()

    @GetMapping("/clients")
    fun clients() = service.findAll()
}
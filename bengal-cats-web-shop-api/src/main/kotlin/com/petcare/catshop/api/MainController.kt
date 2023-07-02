package com.petcare.catshop.api

import com.petcare.catshop.api.request.ClientRegisterRequest
import com.petcare.catshop.core.CatService
import com.petcare.catshop.core.ClientService
import org.springframework.web.bind.annotation.CrossOrigin
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController

@RestController
@CrossOrigin(origins = ["http://localhost:4200"])
@RequestMapping("/api")
class MainController(val catService: CatService, val clientService: ClientService) {
    @GetMapping("/cats")
    fun cats() = catService.findAll()

    @GetMapping("/clients")
    fun clients() = clientService.findAll()

    @PostMapping("/clients")
    fun registerClient(@RequestBody request: ClientRegisterRequest) = clientService.registerClient(request)
}
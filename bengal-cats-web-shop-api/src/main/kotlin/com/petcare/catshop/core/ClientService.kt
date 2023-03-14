package com.petcare.catshop.core

import com.petcare.catshop.repository.ClientRepository
import org.springframework.stereotype.Service

@Service
class ClientService(val repository: ClientRepository) {
    fun findAll() = repository.findAll()
}
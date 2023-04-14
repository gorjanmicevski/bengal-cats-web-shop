package com.petcare.catshop.core

import com.petcare.catshop.api.request.ClientRegisterRequest
import com.petcare.catshop.domain.Client
import com.petcare.catshop.repository.ClientRepository
import org.springframework.stereotype.Service

@Service
class ClientService(val repository: ClientRepository) {
    fun findAll() = repository.findAll()
    fun registerClient(request: ClientRegisterRequest) =
        repository.save(Client(request.firstName, request.lastName, request.email, "mkd"))
}
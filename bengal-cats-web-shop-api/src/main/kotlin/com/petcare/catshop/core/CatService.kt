package com.petcare.catshop.core

import com.petcare.catshop.repository.CatRepository
import org.springframework.stereotype.Service

@Service
class CatService(val repository: CatRepository) {

    fun findAll() = repository.findAll()
}
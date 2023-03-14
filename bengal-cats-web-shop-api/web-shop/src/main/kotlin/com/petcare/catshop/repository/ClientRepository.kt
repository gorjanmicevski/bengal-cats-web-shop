package com.petcare.catshop.repository

import com.petcare.catshop.domain.Client
import org.springframework.data.jpa.repository.JpaRepository

interface ClientRepository: JpaRepository<Client, Long> {
}
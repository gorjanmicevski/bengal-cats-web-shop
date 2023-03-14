package com.petcare.catshop.domain

import jakarta.persistence.Entity
import jakarta.persistence.Table

@Entity
@Table(name="clients")
class Client (
    val firstName: String,
    val lastName: String,
    val email: String,
    val nationality: String
) : BaseEntity<Long>()
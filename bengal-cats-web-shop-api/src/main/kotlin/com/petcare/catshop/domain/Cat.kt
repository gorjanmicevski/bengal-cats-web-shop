package com.petcare.catshop.domain

import jakarta.persistence.Entity
import jakarta.persistence.Table

@Entity
@Table(name = "cats")
class Cat (
    val name: String,
    val age: String,
    val price: Float,
    val description: String?,
    val status: String
) : BaseEntity<Long>()
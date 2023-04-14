package com.petcare.catshop.domain

import jakarta.persistence.*

@Entity
@Table(name="clients")
@SequenceGenerator(name = "clients_seq", sequenceName = "clients_id_seq", allocationSize = 1)
data class Client (
    @Column(name = "first_name")
    val firstName: String,
    @Column(name = "last_name")
    val lastName: String,
    val email: String,
    val nationality: String,
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "clients_seq")
    val id: Long = 0L
)
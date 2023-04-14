package com.petcare.catshop.api.request

data class ClientRegisterRequest(
    val firstName: String,
    val lastName: String,
    val email: String
) {
}
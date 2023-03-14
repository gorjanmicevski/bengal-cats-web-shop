package com.petcare.catshop.repository

import com.petcare.catshop.domain.Cat
import org.springframework.data.jpa.repository.JpaRepository

interface CatRepository: JpaRepository<Cat, Long>{

}
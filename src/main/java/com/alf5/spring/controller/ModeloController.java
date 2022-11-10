package com.alf5.spring.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("api/modelo")
public class ModeloController {

    @GetMapping
    public void modelo (){
        System.out.println("Esta é uma mensagem de teste");
    }
}


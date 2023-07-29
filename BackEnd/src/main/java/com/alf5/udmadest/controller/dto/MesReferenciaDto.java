package com.alf5.udmadest.controller.dto;

import com.alf5.udmadest.model.MesReferencia;
import org.springframework.data.domain.Page;

public class MesReferenciaDto {
    private Long id;
    private String nome;

    public MesReferenciaDto(MesReferencia mesReferencia) {
        this.id = mesReferencia.getId();
        this.nome = mesReferencia.getNome();
    }

    public static Page<MesReferenciaDto> converter(Page<MesReferencia> mesesReferencia) {
        return mesesReferencia.map(MesReferenciaDto::new);
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }
}

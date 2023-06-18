package com.alf5.udmadest.controller.dto;

import com.alf5.udmadest.model.Congregacao;
import com.alf5.udmadest.model.Diretoria;
import org.springframework.data.domain.Page;

import java.time.format.DateTimeFormatter;

public class DiretoriaDto {

    private DateTimeFormatter formatter = DateTimeFormatter.ofPattern("dd/MM/yyyy");
    private Long id;
    private String nome;
    private String cargo;
    private String dataCadastro;

    public DiretoriaDto(Diretoria diretoria) {
        this.id = diretoria.getId();
        this.nome = diretoria.getNome();
        this.cargo = diretoria.getCargo();
        this.dataCadastro = diretoria.getDataCadastro().format(formatter);
    }

    public static Page<DiretoriaDto> converter(Page<Diretoria> diretorias) {
        return diretorias.map(DiretoriaDto::new);
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

    public String getCargo() {
        return cargo;
    }

    public void setCargo(String cargo) {
        this.cargo = cargo;
    }

    public String getDataCadastro() {
        return dataCadastro;
    }

    public void setDataCadastro(String dataCadastro) {
        this.dataCadastro = dataCadastro;
    }
}

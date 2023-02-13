package com.alf5.udmadest.controller.dto;

import com.alf5.udmadest.model.Congregacao;
import org.springframework.data.domain.Page;

import java.time.format.DateTimeFormatter;

public class CongregacaoDto {

    private DateTimeFormatter formatter = DateTimeFormatter.ofPattern("dd/MM/yyyy");
    private Long id;
    private String nome;
    private String dataCadastro;

    public CongregacaoDto(Congregacao congregacao) {
        this.id = congregacao.getId();
        this.nome = congregacao.getNome();
        this.dataCadastro = congregacao.getDataCadastro().format(formatter);
    }

    public static Page<CongregacaoDto> converter(Page<Congregacao> congregacoes) {
        return congregacoes.map(CongregacaoDto::new);
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

    public String getDataCadastro() {
        return dataCadastro;
    }

    public void setDataCadastro(String dataCadastro) {
        this.dataCadastro = dataCadastro;
    }
}

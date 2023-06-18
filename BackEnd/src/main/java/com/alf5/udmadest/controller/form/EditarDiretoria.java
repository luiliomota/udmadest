package com.alf5.udmadest.controller.form;

import com.alf5.udmadest.model.Diretoria;
import com.alf5.udmadest.repository.DiretoriaRepository;

import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;

public class EditarDiretoria {
    @NotNull @NotEmpty
    private String nome;
    private String cargo;

    public Diretoria editar(Long id, DiretoriaRepository diretoriaRepository) {
        Diretoria diretoria = diretoriaRepository.getReferenceById(id);
        diretoria.setNome(this.nome);
        diretoria.setCargo(this.cargo);
        return diretoria;
    }

    public String getNome() {
        return nome;
    }

    public String getCargo() {
        return cargo;
    }
}

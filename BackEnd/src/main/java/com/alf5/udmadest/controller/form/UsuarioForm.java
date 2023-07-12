package com.alf5.udmadest.controller.form;

import com.alf5.udmadest.model.Perfil;
import com.alf5.udmadest.model.Usuario;
import com.alf5.udmadest.repository.PerfilRepository;
import org.hibernate.validator.constraints.Length;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
import java.util.ArrayList;
import java.util.List;

public class UsuarioForm {
    @NotNull
    @NotEmpty
    private String nome;
    @NotNull
    @NotEmpty
    private String email;
    @NotNull
    @NotEmpty
    @Length(min = 8)
    private String senha;
    @NotNull
    @NotEmpty
    private String perfil;

    public Usuario cadastro (PerfilRepository perfilRepository){
        if (perfilRepository.existsByNome(perfil)){
            String encodeSenha = new BCryptPasswordEncoder().encode(this.senha);
            Usuario usuario = new Usuario(this.nome, this.email, encodeSenha);
            Perfil perfilAdd = perfilRepository.findByNome(this.perfil);
            List<Perfil> perfis = new ArrayList<>();
            perfis.add(perfilAdd);
            usuario.setPerfis(perfis);
            return usuario;
        }
        return null;
    }

    public String getNome() {
        return nome;
    }

    public String getEmail() {
        return email;
    }

    public String getSenha() {
        return senha;
    }

    public String getPerfil() {
        return perfil;
    }
}

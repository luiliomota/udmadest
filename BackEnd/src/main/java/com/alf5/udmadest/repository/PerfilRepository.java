package com.alf5.udmadest.repository;

import com.alf5.udmadest.model.Perfil;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PerfilRepository extends JpaRepository<Perfil, Long> {
    Perfil findByNome (String nomePerfil);
    boolean existsByNome (String nomePerfil);
}

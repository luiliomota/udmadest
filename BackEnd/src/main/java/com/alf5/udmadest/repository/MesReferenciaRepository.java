package com.alf5.udmadest.repository;

import com.alf5.udmadest.model.MesReferencia;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MesReferenciaRepository extends JpaRepository<MesReferencia, Long> {
    boolean existsByNome(String mesReferenciaNome);

    MesReferencia findByNome(String mesReferenciaNome);
}

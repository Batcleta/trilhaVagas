import styled from "styled-components";
import { useForm } from "react-hook-form";
import api from "../Axios";

const CreateVaga = () => {
  const onSubmit = (data) => {
    const {
      requerExperiência,
      requerCapacitacao,
      requerIdadeMinima,
      requerHabilitacao,
      possuiSalario,
      ...resData
    } = data;
    // api.post('/vagas', data)
    console.log(resData);
  };
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  return (
    /*
     - Nome da empresa
    - Nome da vaga
    - descrição da vaga
        - Informativo sobre a vaga e seus requerimentos
        - Informativo sobre a jornada de trabalho
        - Regime de contrato
    - Requerimentos da vaga
        - Requer experiência? Se sim, quanto tempo? :number
        - Requer capacitação? Se sim, quais?
        - Requer idade mínima ou máxima? Informar : number
        - Residir próximo a empresa?
        - Requer CNH?
    - Benefícios da vaga
        -- Informar Salário? -> sim? salário ou faixa salarial. Não? A combinar
        -- Informar Vale transporte? -> informar, não informar ou não possui
        -- Informar Plano de saúde -> informar, não informar ou não possui
        -- Jornada flexivel?
        -- Day off no aiversário?
        -- Vale alimentação
        -- Vale Refeição
    
    */
    <CreateVagaWrapper>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h2>Informações principais</h2>
        <FormGroup>
          <label>Para qual empresa? </label>
          <select
            placeholder="Ex: Trilha tecnologia"
            {...register("nomeDaEmpresa", { required: true })}
          >
            <option value=" ">Selecione uma empresa</option>
            <option value="Trilha Tecnologia">Trilha tecnologia</option>
            <option value="Aron Seguros">Aron Seguros</option>
            <option value="Estilok Cosmética">Estilok Cosmética</option>
            <option value="Contato Logística">Contato Logística</option>
            <option value="Total Segurança">Total Segurança</option>
          </select>
        </FormGroup>
        {errors.exampleRequired && <span>This field is required</span>}

        <FormGroup>
          <label>Qual o nome da vaga? </label>
          <input
            placeholder="Ex: Técnico de TI"
            {...register("nomeDaVaga", { required: true })}
          />
        </FormGroup>

        <h3> descrição da vaga</h3>
        <FormGroup>
          <label>Fale um pouco sobre a vaga </label>
          <p>
            Ex: quais as funções exercidas pelo candidato, um resumo sobre as
            competencias e perfil desejados pela empresa
          </p>
          <textarea
            placeholder="Ex: O candidato irá atuar no suporte remoto e presencial de nossos clientes"
            {...register("maisSobreAVaga", { required: true })}
          />
        </FormGroup>

        <FormGroup>
          <label>Qual a jornada de trabalho?</label>
          <select
            placeholder="Ex: Técnico de TI"
            {...register("jornadaDeTrabalho", { required: true })}
          >
            <option value=" ">Selecione uma opção</option>
            <option value=" ">Não Informar</option>
            <option value="Seg a Sex das 08:12 as 18:00">
              Seg a Sex das 08:12 as 18:00
            </option>
            <option value="Seg a Sex das 09:00 as 18:00, sab das 09:00 as 14:00">
              Seg a Sex das 09:00 as 18:00, sab das 09:00 as 14:00
            </option>
          </select>
        </FormGroup>

        <FormGroup>
          <label>Qual o regime do contrato?</label>
          <select
            placeholder="Ex: Técnico de TI"
            {...register("regimeDeContrato", { required: true })}
          >
            <option value=" ">Selecione upa opção</option>
            <option value="CLT">CLT</option>
            <option value="PJ">PJ</option>
            <option value="Estágio">Estágio</option>
            <option value="Jovem Aprendiz">Jovem Aprendiz</option>
          </select>
        </FormGroup>

        <h3>Requerimentos da vaga</h3>

        {/**
          * Requer experiência? Se sim, quanto tempo? :number
        - Requer capacitação? Se sim, quais?
        - Requer idade mínima ou máxima? Informar : number
        - Residir próximo a empresa?
        - Requer CNH?
          */}

        <FormGroup>
          <label>Requer experiência? </label>
          <select
            placeholder="Ex: Técnico de TI"
            {...register("requerExperiência", { required: true })}
          >
            <option value=" ">Selecione uma opção</option>
            <option value="sim">Sim</option>
            <option value="Não">Não</option>
          </select>
        </FormGroup>

        <FormGroup>
          <label>Quanto tempo? </label>
          <input
            type="number"
            {...register("experiencia", { required: true })}
          />
        </FormGroup>

        <FormGroup>
          <label>Requer capacitação? </label>
          <select
            placeholder="Ex: Técnico de TI"
            {...register("requerCapacitacao", { required: true })}
          >
            <option value=" ">Selecione uma opção</option>
            <option value="sim">Sim</option>
            <option value="Não">Não</option>
          </select>
        </FormGroup>

        <FormGroup>
          <label>Quais as capacitações desejadas? </label>
          <input {...register("capacitacoes", { required: true })} />
        </FormGroup>

        <FormGroup>
          <label>Requer Idade mínima ou idade máxima? </label>
          <select
            placeholder="Ex: Técnico de TI"
            {...register("requerIdadeMinima")}
          >
            <option value=" ">Selecione uma opção</option>
            <option value="sim">Sim</option>
            <option value="Não">Não</option>
          </select>
        </FormGroup>

        <FormGroup>
          <label>Idade mínima (opcional) </label>
          <input
            type="number"
            defaultValue="18"
            {...register("idadeMinima", { required: true })}
          />
        </FormGroup>

        <div>Adicionar idade máxima? </div>

        <FormGroup>
          <label>Idade máxima (opcional) </label>

          <input type="number" {...register("idadeMaxima")} />
        </FormGroup>

        <FormGroup>
          <label>Necessita residir próximo a empresa? </label>
          <select {...register("residirProximoAEmpresa", { required: true })}>
            <option value=" ">Selecione uma opção</option>
            <option value={true}>Sim</option>
            <option value={false}>Não</option>
          </select>
        </FormGroup>

        <FormGroup>
          <label>Requer Habilitação </label>
          <select {...register("requerHabilitacao", { required: true })}>
            <option value=" ">Selecione uma opção</option>
            <option value={true}>Sim</option>
            <option value={false}>Não</option>
          </select>
        </FormGroup>

        <FormGroup>
          <label>Categoria</label>
          <input
            placeholder="Ex: A, B ..."
            {...register("categoria", { required: true })}
          />
        </FormGroup>

        <h3>Benefícios da vaga</h3>

        {/**
         * Informar Salário? -> sim? salário ou faixa salarial. Não? A combinar
        -- Informar Vale transporte? -> informar, não informar ou não possui
        -- Informar Plano de saúde -> informar, não informar ou não possui
        -- Jornada flexivel?
        -- Day off no aiversário?
        -- Vale alimentação
        -- Vale Refeição
         */}

        <FormGroup>
          <label>Informar Salário? </label>
          <select {...register("possuiSalario", { required: true })}>
            <option value=" ">Selecione uma opção</option>
            <option value={true}>Sim</option>
            <option value={false}>Não</option>
          </select>
        </FormGroup>

        <FormGroup>
          <label>salário</label>
          <input
            placeholder="R$ 1000"
            {...register("salarioMinimo", { required: true })}
          />
        </FormGroup>

        {/* clicar em adicionar mazimo */}

        <div>adicionar faixa salarial</div>

        <FormGroup>
          <label>Salário Máximo</label>
          <input
            placeholder="R$ 2000"
            {...register("salarioMaximo", { required: true })}
          />
        </FormGroup>

        <FormGroup>
          <label>Possui Vale de tranporte? </label>
          <input type="checkbox" {...register("possuiValeDeTransporte")} />
        </FormGroup>
        <FormGroup>
          <label>Possui plano de saúde? </label>
          <input type="checkbox" {...register("possuiPlanoDeSaude")} />
        </FormGroup>
        <FormGroup>
          <label>Possui jornada flexivel? </label>
          <input type="checkbox" {...register("possuiJornadaFlexivel")} />
        </FormGroup>
        <FormGroup>
          <label>Possui day off em aniversário? </label>
          <input type="checkbox" {...register("possuiDayOff")} />
        </FormGroup>
        <FormGroup>
          <label>Possui vale alimentação? </label>
          <input type="checkbox" {...register("possuiValeAlimentacao")} />
        </FormGroup>
        <FormGroup>
          <label>Possui vale refeição? </label>
          <input type="checkbox" {...register("possuiValeRefeicao")} />
        </FormGroup>

        <input type="submit" />
      </form>
    </CreateVagaWrapper>
  );
};

export default CreateVaga;
const CreateVagaWrapper = styled.div`
  grid-area: main;
`;

const FormGroup = styled.div``;

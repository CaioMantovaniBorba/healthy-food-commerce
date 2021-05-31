/* eslint-disable no-useless-concat */
/* eslint-disable no-return-assign */
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

import toast, { Toaster } from 'react-hot-toast';

import api from '../../services/api';

import { Container } from './styles';

function Register() {
  function handleSubmit(e) {
    window.e.preventDefault();

    const data = {
      name: e.target.elements.name.value,
      date: e.target.elements.date.value,
      cpf: e.target.elements.cpf.value,
      cep: e.target.elements.cep.value,
      neighborhood: e.target.elements.neighborhood.value,
      city: e.target.elements.city.value,
      uf: e.target.elements.uf.value,
      number: e.target.elements.number.value,
      address: e.target.elements.address.value,
      complement: e.target.elements.complement.value,
    };

    const cookieData = [
      {
        text: 'Nome=',
        value: `${data.name}`,
      },
      {
        text: 'CPF=',
        value: `${data.cpf}`,
      },
      {
        text: 'Data=',
        value: `${data.date}`,
      },
      {
        text: 'CEP=',
        value: `${data.cep}`,
      },
      {
        text: 'Cidade=',
        value: `${data.city}`,
      },
      {
        text: 'UF=',
        value: `${data.uf}`,
      },
      {
        text: 'Logradouro=',
        value: `${data.address}`,
      },
      {
        text: 'Bairro=',
        value: `${data.neighborhood}`,
      },
      {
        text: 'Complemento=',
        value: `${data.complement}`,
      },
      {
        text: 'Número=',
        value: `${data.number}`,
      },
    ];

    localStorage.setItem('@HealthyFoodCommerce:data', JSON.stringify(data));

    function handleCookie() {
      const date = new Date();

      date.setTime(date.getTime() + 60000 * 100);

      const expires = `${';' + 'expires='}${date.toUTCString()}`;

      cookieData.map(
        item =>
          (document.cookie = `${
            `${item.text}` + `${item.value}`
          }${expires}; path=/`),
      );
    }

    handleCookie();

    toast.success('Registro feito com sucesso');
  }

  const Schema = Yup.object().shape({
    name: Yup.string().required('Obrigatório'),
    cpf: Yup.string()
      .length(11, 'Mínimo de 11 caracteres')
      .required('Obrigatório'),
    date: Yup.date().required('Obrigatório'),
    cep: Yup.string()
      .length(8, 'Mínimo de 11 caracteres')
      .required('Obrigatório'),
    city: Yup.string().required('Obrigatório'),
    uf: Yup.string().required('Obrigatório'),
    address: Yup.string().required('Obrigatório'),
    neighborhood: Yup.string().required('Obrigatório'),
    complement: Yup.string().required('Obrigatório'),
    number: Yup.number().required('Obrigatório'),
  });

  function handleCep(e, setFieldValue) {
    const { value } = e.target;
    const cep = value?.replace(/[^0-9]/g, '');

    if (cep?.length !== 8) {
      return;
    }

    async function requestCep() {
      await api.get(`/${cep}/json/`).then(response => {
        setFieldValue('city', response.data.localidade);
        setFieldValue('uf', response.data.uf);
        setFieldValue('address', response.data.logradouro);
        setFieldValue('neighborhood', response.data.bairro);
      });
    }

    requestCep();
  }

  return (
    <Container>
      <div />
      <h1>Register</h1>
      <Formik
        initialValues={{
          name: '',
          date: '',
          cpf: '',
          cep: '',
          neighborhood: '',
          city: '',
          uf: '',
          number: '',
          address: '',
          complement: '',
        }}
        validationSchema={Schema}
      >
        {({ errors, touched, isValid, setFieldValue }) => (
          <Form onSubmit={handleSubmit}>
            <Field
              name="name"
              type="text"
              placeholder="Name"
              className={errors.name && touched.name ? 'error' : ''}
            />
            {errors.name && touched.name ? <span>{errors.name}</span> : null}

            <Field
              name="cpf"
              type="text"
              placeholder="CPF"
              className={errors.cpf && touched.cpf ? 'error' : ''}
            />
            {errors.cpf && touched.cpf ? <span>{errors.cpf}</span> : null}

            <Field
              name="date"
              type="date"
              className={errors.date && touched.date ? 'error' : ''}
            />
            {errors.date && touched.date ? <span>{errors.date}</span> : null}

            <Field
              name="cep"
              type="text"
              placeholder="CEP"
              onBlur={e => handleCep(e, setFieldValue)}
              className={errors.cep && touched.cep ? 'error' : ''}
            />
            {errors.cep && touched.cep ? <span>{errors.cep}</span> : null}

            <Field name="city" type="text" placeholder="City" disabled />

            <Field name="uf" type="text" placeholder="UF" disabled />

            <Field name="address" type="text" placeholder="Address" disabled />

            <Field
              name="neighborhood"
              type="text"
              placeholder="Neighborhood"
              disabled
            />

            <Field
              name="complement"
              type="text"
              placeholder="Complement"
              className={errors.complement && touched.complement ? 'error' : ''}
            />
            {errors.complement && touched.complement ? (
              <span>{errors.complement}</span>
            ) : null}

            <Field
              name="number"
              type="text"
              placeholder="Number"
              className={errors.number && touched.number ? 'error' : ''}
            />
            {errors.number && touched.number ? (
              <span>{errors.number}</span>
            ) : null}

            <button type="submit" disabled={!isValid}>
              Registrar
            </button>
          </Form>
        )}
      </Formik>

      <Toaster />
    </Container>
  );
}

export default Register;

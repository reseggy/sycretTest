const URL = 'https://sycret.ru/service/api/api';

const checkResponse = (res) =>
  res.ok ? res.json() : res.json().then((err) => Promise.reject(err));

export const getCertificatesApi = async () => {
  const params = new URLSearchParams({
    ApiKey: '011ba11bdcad4fa396660c2ec447ef14',
    ismob: '0', // Пример добавления дополнительного параметра
    MethodName: 'OSGetGoodList'
  });

  try {
    const response = await fetch(`${URL}?${params}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    });

    const data = await checkResponse(response);

    // Проверка успешности API-запроса
    if (data.result === 0 && data.resultdescription === 'OK') {
      return data; // Возвращаем данные
    } else {
      return Promise.reject(
        new Error(data.resultdescription || 'Error fetching certificates')
      );
    }
  } catch (error) {
    console.error('Error:', error);
    return Promise.reject(error);
  }
};

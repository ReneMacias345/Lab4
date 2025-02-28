import { useFetch } from '../hooks/useFetch';
import { useCounter } from '../hooks/useCounter';
import { LoadingMessage } from './LoadingMessage';
import { CharacterCard } from './CharacterCard'; 

export const CustomHook = () => {
  const { counter, decrement, increment } = useCounter(1);
  const { data, hasError, isLoading } = useFetch(`https://swapi.dev/api/people/${counter}/`);

  return (
    <>
      <h1>Información de Personajes de Star Wars</h1>
      <hr />
      <h2>{data?.name}</h2>
      {isLoading ? (
        <LoadingMessage />
      ) : (
        <CharacterCard
          id={counter}
          name={data.name}
          gender={data.gender}
          birthYear={data.birth_year}
          height={data.height}
          mass={data.mass}
        />
      )}
      <button className="btn btn-primary" onClick={() => decrement()}>
        Anterior
      </button>
      <button className="btn btn-primary" onClick={() => increment()}>
        Siguiente
      </button>
    </>
  );
};
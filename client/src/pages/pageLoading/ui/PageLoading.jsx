import Background from '../../../shared/ui/Background';
import Spinner from '../../../shared/ui/Spinner';

export function PageLoading() {
  return (
    <Background>
      <Spinner size="large" />
    </Background>
  );
}

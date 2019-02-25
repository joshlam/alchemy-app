import { deviceHeight } from 'Alchemy/lib/sizes';
import withSharedStyles from 'Alchemy/lib/styles';

export default withSharedStyles({
  transmutationsBackground: {
    justifyContent: 'space-between'
  },
  transmutationTree: {
    height: deviceHeight - 200,
    justifyContent: 'center',
    top: 120
  },
  transmutationRow: {
    alignItems: 'flex-end',
    flexDirection: 'row',
    justifyContent: 'center'
  }
});

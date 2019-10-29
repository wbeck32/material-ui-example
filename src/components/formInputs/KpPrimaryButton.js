import { Button } from '@material-ui/core';
import { styled } from '@material-ui/core/styles';

const KpPrimaryButton = styled(Button)({
  color: '#fff',
  margin: 0,
  overflow: 'visible',
  'text-transform': 'none',
  cursor: 'pointer',
  backgroundColor: '#0078b3',
  '&: hover': '&: focus',
  '&: active': {
    backgroundColor: '#003b71',
    color: '#fff',
  },
  '&: disabled': {
    backgroundColor: '#d3d6dc',
  },
  display: 'inline-block',
  padding: '13px 30px',
  minWidth: '160px',
  border: 0,
  'text-align': 'center',
  'box-sizing': 'border-box',
  height: 'auto',
  'line-height': '20px',
  'vertical-align': 'middle',
  'white-space': 'normal',
  'word-wrap': 'break-word',
  'border-radius': 0,
  transition:
		'background-color 0.2s ease, color 0.2s ease, border-color 0.2s ease',
});

export default KpPrimaryButton;

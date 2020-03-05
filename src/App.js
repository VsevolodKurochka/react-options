import React, {useState} from 'react';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import Typography from '@material-ui/core/Typography';
import {useForm} from './hooks/useForm';
import {useStyles} from './hooks/useStyles';
import {formModel} from './formModel';
import {createText} from './utils/createText';
import {createSites} from './utils/createSites';

function App() {
  const createSQL = () => {
    const sites = createSites(inputs);
    setText(createText(sites.currentSite, sites.newSite));
  };

  const copyText = () => {
    const textArea = document.getElementById('custom-text');
    textArea.select();
    textArea.setSelectionRange(0, 99999);
    document.execCommand('copy');
  };

  const [text, setText] = useState('');
  const {inputs, handleSubmit, handleChange} = useForm(formModel, createSQL);
  const classes = useStyles();

  return (
      <Container maxWidth={'lg'} className={classes.root}>
        <form noValidate autoComplete="off" onSubmit={(e) => handleSubmit(e)}>
          {
            inputs && inputs.map((input, index) =>
                <FormControl
                  key={index}
                  fullWidth
                  error={Boolean(input.alert)}
                  className={classes.margin}>
                  <TextField
                      required
                      label={input.label}
                      variant="outlined"
                      value={input.value}
                      error={Boolean(input.alert)}
                      onChange={(event) => handleChange(input.name, event)}
                  />
                  {Boolean(input.alert) ? (
                      <FormHelperText>{input.alert}</FormHelperText>
                  ) : null}
                </FormControl>
          )}
          <FormControl className={classes.margin}>
            <Button type="submit" variant="contained" color="primary" size="large">
              Create SQL
            </Button>
          </FormControl>
          { text ? (
              <>
                <Typography variant="h3" component="h3" gutterBottom>
                  SQL query
                </Typography>
                <textarea
                    readOnly={true}
                    className={classes.text}
                    id={'custom-text'}
                    value={text}
                    resize={'none'}
                    rows={4}
                />
                <Button variant="contained" color="primary" size="large" onClick={() => copyText()}>
                  Copy text
                </Button>
              </>
          ) : null}
        </form>
      </Container>
  );
}

export default App;

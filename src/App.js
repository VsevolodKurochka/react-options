import React, {useState, useEffect, useContext} from 'react';
import Container from '@material-ui/core/Container';
import {useForm} from './hooks/useForm';
import {useStyles} from './hooks/useStyles';
import {formModel} from './formModel';
import {createText} from './utils/createText';
import {createSites} from './utils/createSites';
import {removeLastSlash} from './utils/removeLastSlash';
import {FirebaseContext} from './firebase';
import 'firebase/firestore';
import ExistingQueries from './sections/existingQueries';
import AddSQL from './sections/addSQL';

function App() {
    const firebase = useContext(FirebaseContext);

    const createSQL = () => {
        const {currentSite, newSite} = createSites(inputs);
        queries.doc().set({currentSite: removeLastSlash(currentSite), newSite: removeLastSlash(newSite)});
        clearAllInputs();
        createTextForTextarea(removeLastSlash(currentSite), removeLastSlash(newSite));
        return getQuery();
    };

    const classes = useStyles();
    const [list, setList] = useState([]);
    const [text, setText] = useState('');
    const {inputs, handleSubmit, handleChange, clearAllInputs} = useForm(formModel, createSQL);
    const queries = firebase.firestore().collection('queries');

    const copyText = () => {
        const textArea = document.getElementById('custom-text');
        textArea.select();
        textArea.setSelectionRange(0, 99999);
        document.execCommand('copy');
    };

    async function getQuery() {
        const response = await queries.get();
        const items = response.docs.map((item) => ({
          id: item.id,
          ...item.data()
        }));
        setList(items);
    }

    const copyQuery = (id, index) => {
        const {currentSite, newSite} = list[index];
        createTextForTextarea(currentSite, newSite);
    };

    const deleteQuery = (id) => {
        queries.doc(id).delete().then(() => getQuery());
    };

    const createTextForTextarea = async (currentSite, newSite) => {
        const text = createText(currentSite, newSite);
        await setText(text);
        copyText();
    };

    useEffect(() => {
        getQuery();
    }, []);

    return (
      <Container maxWidth={'lg'} className={classes.root}>
        <AddSQL
            inputs={inputs}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
        />
        <ExistingQueries
            list={list}
            copyQuery={copyQuery}
            deleteQuery={deleteQuery}
        />
          <textarea
              id="custom-text"
              value={text}
              readOnly={true}
              className={classes.text}
          />
      </Container>
    );
}

export default App;

import React from 'react';
import _ from 'lodash';
import {reduxForm, Field} from "redux-form";
import SurveyField from './SurveyField';
import {Link} from 'react-router-dom';
import validateEmails from '../../utils/validateEmails';
import formFields from './formFields'



class SurveyFrom extends React.Component {

    renderFields() {
        return _.map(formFields, ({label, name}) => {
            return (<Field key={name} component={SurveyField} type="text" label={label} name={name}/>);
        });
    }

    render() {
        return (
            <div>
                <form onSubmit={this.props.handleSubmit(this.props.onSurveySubmit)}>
                    {this.renderFields()}
                    <Link className="red btn-flat left white-text" to="/surveys">
                        Cancel
                        <i className="material-icons left">close</i>
                    </Link>
                    <button type="submit" className="teal btn-flat right white-text">
                        Next <i className="material-icons right">chevron_right</i></button>
                </form>
            </div>
        );
    }
}


function validate(values) {
    const errors = {};

    errors.recipients = validateEmails(values.recipients || '');

    _.each(formFields, ({name})=>{
        if (!values[name]){
            errors[name] = `You must provide a name ${name}`
        }
    });

    return errors;
}


export default reduxForm({
    validate: validate,
    form: 'surveyForm',
    destroyOnUnmount: false
})(SurveyFrom);
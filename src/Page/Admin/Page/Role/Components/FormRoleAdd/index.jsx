import { Button } from 'antd';
import React from 'react';
import { useForm } from 'react-hook-form';
import InputField from '../../../../Components/Common/FromControl/InputField/index';

const FromRoleAdd = (props) => {
    const forms = useForm({
        defaultValues: {
            name: '',
        },
    });


    return (
        <form onSubmit={forms.handleSubmit(props.handleSubmitFrom)}>

            <div className="GroupForm">
                <label htmlFor="name">Chức vụ</label>
                <InputField name="name" type='text' form={forms}></InputField>
            </div>
            
            <Button htmlType='submit'>Lưu</Button>
        </form>
    )
}

export default FromRoleAdd
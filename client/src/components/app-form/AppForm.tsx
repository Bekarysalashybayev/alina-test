import './app-form.scss';
import Button from "@/components/ui/button/Button.tsx";
import Input from "@/components/ui/input/Input.tsx";
import {useMemo, useState} from "react";
import RadioGroup from "@/components/ui/radio-group/RadioGroup.tsx";
import {
    addedOptions,
    appCategoryOptions,
    AppFormType,
    callOptions,
    cityOptions,
    ErrorType,
    initialError,
    initialForm,
    requiredTypes
} from "@/components/app-form/constants.ts";
import CheckboxGroup from "@/components/ui/checkbox-group/CheckboxGroup.tsx";
import Dropdown from "@/components/ui/dropdown/Dropdown.tsx";
import {checkExistObject, checkRequiredFields} from "@/components/app-form/rules.ts";
import Date from "@/components/ui/date/Date.tsx";
import {useActions} from "@/hooks/useActions.ts";
import {useAppSelector} from "@/hooks/useAppSelector.ts";

const AppForm = () => {
    const {createApp} = useActions()
    const [addForm, setAddForm] = useState<AppFormType>(initialForm)
    const [error, setError] = useState<ErrorType>(initialError)
    const { isLoading, error: networkError} = useAppSelector(state => state.application)

    const setValue = <K extends keyof AppFormType>(key: K, value: AppFormType[K]) => {
        setAddForm(prev => (
            {
                ...prev,
                [key]: value
            }
        ))
    }

    const formChanged = useMemo(() => {
        return checkExistObject(addForm, initialForm)
    }, [addForm])

    const onSubmit = () => {
        const checkedObject = checkRequiredFields(addForm, requiredTypes)
        setError(checkedObject.obj as ErrorType)
        if (checkedObject.hasError) return;
        createApp(addForm)
        setAddForm(initialForm)
    }

    return (
        <div className="app-form">
            {networkError && <div style={{color: "red", marginBottom: 25}}>{networkError}</div>}
            {isLoading && <div>Loading ...</div>}
            <div className="form-row">
                <div className="col-4 first">
                    <Input
                        label='Название заявки'
                        required
                        value={addForm.name}
                        onValueChange={(val) => setValue('name', val)}
                        error={!addForm.name ? error.name : ''}
                        placeholder="Напишите название заявки"
                    />

                    <div className="form-row">
                        <div className="col-4">
                            <Input
                                type='number'
                                label='Сумма заявки'
                                required
                                value={addForm.summ.toString()}
                                onValueChange={(val) => setValue('summ', val ? parseInt(val) : 0)}
                                error={''}
                                placeholder="Сумма"
                                prefix='₸'
                            />
                        </div>
                        <div className="col-6">
                            <Dropdown
                                options={appCategoryOptions}
                                selectedValue={addForm.category}
                                select={val => setValue('category', val)}
                                label="Тип заявки*"
                                placeHolder="Выберите"
                                isError={!addForm.category ? !!error.category : false}
                            />
                        </div>
                    </div>

                    <RadioGroup
                        options={callOptions}
                        selectedValue={addForm.isCall}
                        title="Позвонить для подтверждения"
                        onChange={val => setValue('isCall', val)}
                    />

                    <CheckboxGroup
                        options={addedOptions}
                        selectedValue={addForm.addedInfo}
                        title="Получать дополнительную информацию"
                        onChange={val => setValue('addedInfo', val)}
                    />
                </div>
                <div className="col-3 second">
                    <Input
                        type='number'
                        label='Количество заявителей'
                        value={addForm.guestCount.toString()}
                        onValueChange={(val) => setValue('guestCount', val ? parseInt(val) : 0)}
                        error={''}
                        placeholder="Сумма"
                        arrow
                    />

                    <Dropdown
                        options={cityOptions}
                        selectedValue={addForm.city}
                        select={val => setValue('city', val)}
                        label="Город"
                        placeHolder="Выберите Ваш город"
                        block
                    />
                </div>
                <div className="col-3">
                    <Input
                        label='Номер телефона*'
                        required
                        value={addForm.phone}
                        onValueChange={(val) => setValue('phone', val)}
                        error={!addForm.phone ? error.phone : ''}
                        placeholder="+7 (___)  ___ - __ - __"
                        mask="+7 (___) ___-__-__"
                    />

                    <Date
                        label="Дата заявки"
                        selected={addForm.date}
                        setSelected={val => setValue('date', val)}
                    />
                </div>
            </div>
            <div className="required-text">
                * - обязательные поля
            </div>
            <div className="button-list">
                <Button btn_size='large' onClick={onSubmit}>
                    Отправить
                </Button>

                <Button
                    btn_size='large'
                    outline
                    disabled={!formChanged}
                    onClick={() => setAddForm(initialForm)}
                >
                    Очистить
                </Button>
            </div>
        </div>

    );
};

export default AppForm;

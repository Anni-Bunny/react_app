import {Field, Input, Label, Textarea, Button} from '@headlessui/react'
import clsx from 'clsx'
import {useState} from "react";

export const Contact = () => {
    const [data, setdata] = useState({
        name: "",
        surname: "",
        feedback: ""
    })

    function getAlert(e) {
        e.preventDefault()
        alert(`name: ${data.name}, surname: ${data.surname}, feedback: ${data.feedback}`)
        setdata({
            name: "",
            surname: "",
            feedback: ""
        })
    }

    function handleInputChange(e) {
        // let name = e.target.name;
        // let value = e.target.value;
        let {name, value} = e.target

        setdata({...data, [name]: value});
    }

    return (
        <form onSubmit={getAlert} className="bg-black ">
            <div className="w-full max-w-md px-4 container mx-auto text-start text-white mt-10 space-y-3">
                <h1 className="text-lg font-bold text-center">Contact Us</h1>
                <Field>
                    <Label className="text-sm/6 font-medium">Name</Label>
                    <Input onChange={handleInputChange} name="name"
                           className={clsx(
                               'mt-3 block w-full rounded-lg border-none bg-white/10 py-1.5 px-3 text-sm/6 text-white',
                               'focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25'
                           )} placeholder={"Enter your name"}
                           required
                           value={data.name}
                    />
                </Field>
                <Field>
                    <Label className="text-sm/6 font-medium">Surname</Label>
                    <Input onChange={handleInputChange} name="surname"
                           className={clsx(
                               'mt-3 block w-full rounded-lg border-none bg-white/10 py-1.5 px-3 text-sm/6 text-white',
                               'focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25'
                           )} placeholder={"Enter your surname"}
                           required
                           value={data.surname}
                    />
                </Field>
                <Field>
                    <Label className="text-sm/6 font-medium">feedback</Label>
                    <Textarea onChange={handleInputChange} name="feedback"
                              className={clsx(
                                  'mt-3 block w-full resize-none rounded-lg border-none bg-white/10 py-1.5 px-3 text-sm/6 text-white',
                                  'focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25'
                              )} placeholder={"Enter your feedback"}
                              rows={3}
                              required
                              value={data.feedback}
                    />
                </Field>
                <Button type={"submit"}
                        className="w-full text-center rounded-md bg-gray-700 py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-600 data-[open]:bg-gray-700 data-[focus]:outline-1 data-[focus]:outline-white">
                    Submit
                </Button>
            </div>

        </form>
    )
}
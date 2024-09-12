interface TextInputProps {
    label: string;
    name: string;
    type?: "text" | "email" | "textarea";
}

export default function TextInput({ label, name, type = "text" }: TextInputProps) {

    const renderInput = () => {
        if (type === "textarea") {
            return (
                <textarea id={name} rows={8} name={name} className="p-4 bg-slate-900 border border-gray-700 rounded-lg focus:border-gray-500 focus:outline-none focus:ring-gray-500 focus:ring-offset-0 focus:ring-offset-gray-900 text-gray-400 text-xl placeholder-gray-500" />
            );
        }

        return (
            <input id={name} name={name} type={type} className="p-4 text-xl bg-slate-900 border border-gray-700 rounded-lg focus:border-gray-500 focus:outline-none focus:ring-gray-500 focus:ring-offset-0 focus:ring-offset-gray-900 text-gray-400 placeholder-gray-500" />
        );
    }

    return (
        <div className="flex flex-col gap-2 w-full">
            <label htmlFor={name} className="uppercase text-gray-300 font-semibold">{label}</label>
            {renderInput()}
        </div>
    );
}
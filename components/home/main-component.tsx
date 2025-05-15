

interface MainComponentProps {
    title: string;
    moreInformationLabel: string;
    moreInformationHref: string;
    children: React.ReactNode;
}


export const MainComponent = ({
    title,
    moreInformationLabel,
    moreInformationHref,
    children
}: MainComponentProps
) => {
    return (
        <div className="flex flex-col gap-1 p-4 mt-5 w-full">
            <div className="flex flex-row justify-between items-center mb-5">
                <h1 className="text-2xl font-bold text-gray-600">{title}</h1>
                <a
                    className="text-gray-500
                        hover:text-gray-700 
                        hover:underline" 
                    href={moreInformationHref}>
                        {moreInformationLabel}
                </a>
            </div>
        <div>
            {children}
        </div>
        </div>
    );
}
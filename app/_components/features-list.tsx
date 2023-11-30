const features = [
    {
        itemNumber: "Step 1",
        title: "Sign up for an account",
        description: "Either starting out with a free plan or choose our  pro plan"
    },
    {
        itemNumber: "Step 2",
        title: "Upload your PDF file",
        description: "We'll process your file and make it ready for you to chat with."
    },
    {
        itemNumber: "Step 3",
        title: "Start asking questions",
        description: "It's that simple. Try out Quill today - it really takes less than a minute."
    }
];

export const FeaturesList = () => (
    <ol className="my-8 space-y-4 pt-8 md:flex md:space-x-12 md:space-y-0">
        {features.map(feature => (
            <li key={feature.itemNumber} className="md:flex-1">
                <div className="flex flex-col space-y-2 border-l-4 border-zinc-300 py-2 pl-4 md:border-l-0 md:border-t-2 md:pb-0 md:pl-0 md:pt-4">
                    <span className="text-sm font-medium text-blue-600">{feature.itemNumber}</span>
                    <span className="text-xl font-semibold">{feature.title}</span>
                    <span className="mt-2 text-zinc-700">{feature.description}</span>
                </div>
            </li>
        ))}
    </ol>
);

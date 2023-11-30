export const UserInfo = ({ name, email }: { name: string; email: string }) => (
    <div className="flex items-center justify-start gap-2 p-2">
        <div className="flex flex-col space-y-0.5 leading-none">
            {name && <p className="text-sm font-medium text-black">{name}</p>}
            {email && <p className="w-[200px] truncate text-xs text-zinc-700">{email}</p>}
        </div>
    </div>
);

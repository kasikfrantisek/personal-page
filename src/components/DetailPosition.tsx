type Props = {
    children: React.ReactNode
}

export const DetailPosition = ({children}: Props) => {
    return (
        <div className="text-white">
            <h2>{children}</h2>
        </div>
    )
}
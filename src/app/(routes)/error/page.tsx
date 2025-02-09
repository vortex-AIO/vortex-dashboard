"use client"

const Error = () => {
    return (
        <div className="grid place-items-center text-center py-48 gap-5">
            <div className="text-7xl font-semibold text-zinc-400">Error</div>
            <p>
                An error occurred during the authorization process. Either contact support at
                kazu.bot/support or try again.
            </p>
        </div>
    )
}

export default Error

const Task = () => {
    return (
        <>
            <div class="flex relative gap-4 items-center p-3 rounded-lg border">
                <div class="grid grow gap-1.5">
                    <span class="font-medium leading-tight">Task task 1</span>
                    <div class="flex items-center gap-2.5">
                        <span class="text-sm font-medium">+50 CATS</span>
                    </div>
                </div>
                <div class="flex gap-2 items-center">
                    <button class="flex gap-1 justify-center items-center px-4 py-1 w-16 h-8 text-sm font-medium whitespace-nowrap rounded-full ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90">
                        Open
                    </button>
                </div>
            </div>
        </>
    )
}
export default Task
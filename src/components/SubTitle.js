function SubTitle(props) {
    return (
        <div>
            <div className="w-20 h-3 mb-2 mt-20 shadow bg-gray-500 text-opacity-0 text-black rounded-full bg-gradient-to-r from-green-400 to-blue-500"></div>
            <h2 className="text-4xl font-medium mb-4">{props.children}</h2>
        </div>
    );
}

export default SubTitle;
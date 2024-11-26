const Card = ({ title, desc, href, soon, icon }) => {

    if (soon) {
        return (
            <a className="shadow shadow-slate-600 p-5 text-center cursor-default bg-slate-300">
                <div className="flex justify-center transition-all duration-300 group-hover:text-white text-slate-500">{icon}</div>
                <p className="text-slate-500 text-xl font-semibold mb-1 mt-1">{title}</p>
                <p className="text-slate-400 mb-3">{desc}</p>
                <p className="font-bold text-red-500">Próximamente</p>
            </a>
        )
    }

    return (
        <a href={href} className="shadow hover:-translate-y-1 shadow-slate-600 group p-5 text-center bg-white hover:text-white transition-all duration-300 hover:bg-secondary group">
            <div className="flex justify-center transition-all group-hover:text-white text-slate-500">{icon}</div>
            <p className="group-hover:text-white transition-all text-primary text-xl font-semibold mb-1 mt-1">{title}</p>
            <p className="group-hover:text-white transition-all text-slate-600 mb-3">{desc}</p>
        </a>
    );
};

export default Card;

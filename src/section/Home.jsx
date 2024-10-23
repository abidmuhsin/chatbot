const Home =()=> {
    return (
        <div className="bg-[url('https://ppid.bps.go.id/assets/img/cover-gedung.png')] bg-center bg-cover max-w-full min-h-96 flex justify-center items-center">
        <div className="bg-blue-900 opacity-80 absolute w-full h-96"></div>
            <div className="w-[60%] text-center relative">
                <h1 className="text-[8vh] font-bold text-white">Penyedia Data Statistik Berkualitas
                Untuk Indonesia Maju</h1>
                <input type="search" placeholder="Cari data statistik..." className="w-[70%] h-10 rounded-xl p-4 mt-4"/>
            </div>
        </div>
    )
}

export default Home;
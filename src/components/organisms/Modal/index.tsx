import React from 'react'
import { Modal } from '@material-ui/core';

const RegisterModal = ({
    openModal,
    onClick,
    setBirthday1,
    setBirthday2,
    setBirthday3,
    setGender,
    setName,
    addCard,
}: {
    openModal: boolean
    onClick: () => void
    setBirthday1: React.Dispatch<React.SetStateAction<string>>
    setBirthday2: React.Dispatch<React.SetStateAction<string>>
    setBirthday3: React.Dispatch<React.SetStateAction<string>>
    setGender: React.Dispatch<React.SetStateAction<string>>
    setName: React.Dispatch<React.SetStateAction<string>>
    addCard: () => void
}) => {
    const registerGender = (e: any) => {
        setGender(e.target.value)
    }

    const registerBirthday1 = (e: any) => {
        setBirthday1(e.target.value)
    }

    const registerBirthday2 = (e: any) => {
        setBirthday2(e.target.value)
    }

    const registerBirthday3 = (e: any) => {
        setBirthday3(e.target.value)
    }

    const registerName = (e: any) => {
        setName(e.target.value)
    }

    return (
        <>
            <Modal
                className="modal h-screen w-full fixed left-0 top-0 flex justify-center items-center bg-black bg-opacity-50"
                open={openModal}
                onClose={onClick}
            >
                <div className="bg-white rounded-lg shadow-lg w-10/12 md:w-1/3">
                    <div className="border-b px-4 py-2 flex justify-between items-center">
                        <h3 className="font-bold text-lg text-gray-500 tracking-wider">
                            寿命を計算します
                        </h3>
                        <button className="text-black close-modal"></button>
                    </div>
                    <form className="mx-16 mt-10">
                        <label className="block">
                            <span className="text-gray-700 shadow-xl">名前</span>
                            <input
                                className="mt-1 mb-5 p-1.5 block w-full rounded-md border-2 border-gray-300 shadow-xl"
                                placeholder="名前を入力してください"
                                onChange={registerName}
                            />
                        </label>
                        <label className="block">
                            <span className="text-gray-700 shadow-xl">誕生日（半角数字）</span>
                            <div className='flex'>
                                <input
                                    className="mt-1 mb-5 p-1.5 block w-full rounded-md border-2 border-gray-300 shadow-xl"
                                    placeholder="2000"
                                    onChange={registerBirthday1}
                                />
                                <span className='flex items-center'>年</span>
                                <input
                                    className="mt-1 mb-5 p-1.5 block w-full rounded-md border-2 border-gray-300 shadow-xl"
                                    placeholder="2"
                                    onChange={registerBirthday2}
                                />
                                <span className='flex items-center'>月</span>
                                <input
                                    className="mt-1 mb-5 p-1.5 block w-full rounded-md border-2 border-gray-300 shadow-xl"
                                    placeholder="2"
                                    onChange={registerBirthday3}
                                />
                                <span className='flex items-center'>日</span>
                            </div>
                        </label>
                        <label className="block">
                            <span className="text-gray-700">性別</span>
                            <input
                                className="mt-1 mb-16 p-1.5 block w-full rounded-md border-2 border-gray-300 shadow-xl"
                                placeholder="男 or 女"
                                onChange={registerGender}
                            />
                        </label>
                    </form>
                    <div className="flex justify-end items-center w-100 border-t p-3">
                        <button onClick={onClick} className="bg-gray-200 hover:bg-gray-300 px-3 py-1 rounded text-black mr-1 close-modal">キャンセル</button>
                        <button onClick={addCard} className="bg-blue-500 hover:bg-blue-700 px-3 py-1 rounded text-white">追加</button>
                    </div>
                </div>
            </Modal>
        </>
    )
}

export default RegisterModal

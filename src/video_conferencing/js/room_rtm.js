let handleMemberJoined = async (MemberId) =>{
    console.log('A new member has joined: ',MemberId)
    addMemberToDom(MemberId)

    let members = await channel.getMembers()
    updateMemberTotal(members)
}

let addMemberToDom = async(MemberId) =>{

    let {name} = await rtmClient.getUserAttributesByKeys(MemberId,['name'])
    let membersWarapper = document.getElementById('member__list')
    let memberItem = `<div class="member__wrapper" id = "member__${MemberId}__wrapper">
                        <span class="green__icon"></span>
                        <p class="member_name">${name}</p>
                    </div>`

    membersWarapper.insertAdjacentHTML('beforeend', memberItem)
}

let updateMemberTotal = async( members) =>{
    let total = document.getElementById('members__count')
    total.innerText = members.length
}

let handleMemberLeft = async (MemberId) =>{
    removeMemberFromDom(MemberId)

    let members = await channel.getMembers()
    updateMemberTotal(members)
}

let removeMemberFromDom = async(MemberId) =>{
    let memberWarapper = document.getElementById(`member__${MemberId}__wrapper`)
    memberWarapper.remove()
}

let getMembers = async() =>{
    let members = await channel.getMembers()
    updateMemberTotal(members)

    for (let i=0; members.length > i; i++){
        addMemberToDom(members[i])
    }
}

let handleChannelMessage = async (messageData, MemberId) =>{
    console.log('msg received')
    let data = JSON.parse(messageData.text)
    if(data.type === 'chat'){
        addMessgaeToDom(data.displayName, data.message)
    }
}

let sendMessage = async(e) =>{
    e.preventDefault()

    let message = e.target.message.value
    channel.sendMessage({text:JSON.stringify({'type':'chat', 'message': message, 'displayName':displayName})})
    addMessgaeToDom(displayName, message)
    e.target.reset()
}


let addMessgaeToDom = (name, message) =>{
    let messagesWrapper = document.getElementById('messages')

    let newMessage = ` <div class="message__wrapper">
                        <div class="message__body">
                            <strong class="message__author">${name}</strong>
                            <p class="message__text">${message}</p>
                            </div>
                        </div>`

    messagesWrapper.insertAdjacentHTML('beforeend', newMessage)
    let lasMessage = document.querySelector('#messages .message__wrapper:last-child')
    if(lasMessage){
        lasMessage.scrollIntoView()
    }
}

let leaveChannel = async()=>{
    await channel.leave()
    await rtmClient.logout()
}

window.addEventListener('beforeunload', leaveChannel)

let messageForm = document.getElementById('message__form')
messageForm.addEventListener('submit', sendMessage)
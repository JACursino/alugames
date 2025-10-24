# alugames
flowchart TD
    Start([👤 Usuário clica no botão<br/>de um jogo]) --> GetElement[🎯 Capturar elemento clicado<br/>botão específico]
    
    GetElement --> GetGame[🎮 Identificar o jogo relacionado<br/>elemento pai/container]
    
    GetGame --> CheckState{🔍 Qual o estado atual?<br/>Verificar texto do botão}
    
    CheckState -->|texto = 'Alugar'| StateAvailable[✅ DISPONÍVEL]
    CheckState -->|texto = 'Devolver'| StateRented[🔒 ALUGADO]
    
    StateAvailable --> RentActions[📦 PROCESSO DE ALUGUEL]
    RentActions --> Rent1[Alterar texto do botão:<br/>botão.textContent = 'Devolver']
    Rent1 --> Rent2[Escurecer capa do jogo:<br/>imagem.classList.add'game-alugado']
    Rent2 --> RentComplete[Estado atualizado ✓]
    RentComplete --> End1([🎉 Jogo agora está ALUGADO])
    
    StateRented --> ReturnActions[📤 PROCESSO DE DEVOLUÇÃO]
    ReturnActions --> Return1[Alterar texto do botão:<br/>botão.textContent = 'Alugar']
    Return1 --> Return2[Clarear capa do jogo:<br/>imagem.classList.remove'game-alugado']
    Return2 --> ReturnComplete[Estado atualizado ✓]
    ReturnComplete --> End2([✨ Jogo agora está DISPONÍVEL])
    
    style Start fill:#e3f2fd,stroke:#1976d2,stroke-width:3px
    style End1 fill:#c8e6c9,stroke:#388e3c,stroke-width:3px
    style End2 fill:#fff9c4,stroke:#f57f17,stroke-width:3px
    style CheckState fill:#ffe0b2,stroke:#e64a19,stroke-width:2px
    style StateAvailable fill:#bbdefb,stroke:#1976d2
    style StateRented fill:#ffccbc,stroke:#d84315
    style RentActions fill:#e8f5e9,stroke:#4caf50
    style ReturnActions fill:#fff3e0,stroke:#ff9800

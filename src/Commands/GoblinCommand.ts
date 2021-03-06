import { Message, MessageEmbed } from 'discord.js'
import Goblin from '../Goblin'
import { ICommand } from './index'

export default class GoblinCommand implements ICommand {
  public command: string = 'general'

  process(msg: Message) {
    if (msg.content === '~goblin ajuda' || msg.content === '~goblin') {
      msg.channel.send(this.getHelp())
      return true
    } else if (msg.content === '~goblin novo') {
      msg.channel.send(this.generateGoblin(msg.author.username))
      return true
    } else if (msg.content === '~goblin saiba-mais') {
      msg.author.send(
        'Você é bem bacana em querer saber mais sobre o criador de Malditos Goblins =D\nAqui está o site: http://www.coisinhaverde.com.br/'
      )
      return true
    }
    return false
  }

  generateGoblin(name?: string): MessageEmbed {
    let goblin = new Goblin()
    const message = new MessageEmbed()
    message.setTitle('Uma nova *Coisinha Verde©* (ou de outra cor) foi criada')
    message.setAuthor(name)
    message.setColor(goblin.coloracao.cor)
    message.addFields(
      { name: 'Nome gerado:', value: goblin.nome, inline: true },
      { name: 'Ocupação:', value: goblin.ocupacao.nome, inline: true },
      { name: 'Coloração:', value: goblin.coloracao.nome, inline: true },
      { name: 'Caracteristica:', value: goblin.caracteristica.toString() }
    )
    message.addField(':crossed_swords: Combate', goblin.combate, true)
    message.addField(':man_running: Habilidade', goblin.habilidade, true)
    message.addField(':books: Conhecimento', goblin.conhecimento, true)
    message.addField(':four_leaf_clover: Sorte', goblin.sorte, true)

    goblin.ocupacao.habilidades.forEach((hab, index) => {
      message.addField(`Level ${index + 1} - ${hab.nome}`, hab.descricao)
    })
    message.addField(`Equipamentos iniciais:`, goblin.ocupacao.equipamento)
    return message
  }

  getHelp(): MessageEmbed {
    const message = new MessageEmbed()
      .setColor('#42b983')
      .setTitle('Ajuda')
      .setDescription('Use os comandos abaixo:')
      .addFields(
        { name: '~goblin ajuda', value: 'Mostra a lista de comandos' },
        { name: '~goblin novo', value: 'Cria um novo goblin' },
        {
          name: '~goblin saiba-mais',
          value: 'Envia em privado o link para o site do CoisinhaVerde =D'
        }
      )
    return message
  }
}

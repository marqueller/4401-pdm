Requisitos Funcionais
Registro e Autenticação de Usuários:
Permitir registro com nome, e-mail e senha.
Verificar validade do e-mail e força da senha.

Permitir login após registro.
Controle de Acesso:
Acesso restrito a usuários autenticados.
Restrição de acesso em áreas específicas para tipos de usuários (por exemplo, professores).

Integração com YouTube Studio:
Permitir postagens privadas no YouTube Studio pelo site.
Interface para selecionar vídeo, adicionar descrição, tags e configurações de privacidade.

Painel de Controle do Professor:
Painel específico para professores gerenciarem suas postagens no YouTube Studio.
Capacidade de visualizar, editar e excluir postagens anteriores.

Banco de Dados:
Armazenar informações de usuários, perfil e permissões.
Armazenar registros de postagens no YouTube Studio, incluindo título, descrição, data e status de privacidade.

Segurança:
Senhas armazenadas com hash e salting.
Uso de HTTPS para comunicação segura.

Recuperação de Senha:
Mecanismo para redefinir senhas via e-mail com link de redefinição.

Requitos Não Funcionais
Desempenho:
O site deve ser responsivo e carregar rapidamente para garantir uma experiência de usuário satisfatória.
Os processos de autenticação e postagem no YouTube Studio devem ser eficientes para minimizar o tempo de espera dos usuários.

Segurança:
A comunicação entre o site e o YouTube Studio deve ser segura para proteger dados sensíveis, como credenciais de login e informações de postagem.

Escalabilidade:
O site deve ser capaz de lidar com um aumento no número de usuários e de postagens sem comprometer o desempenho.
O banco de dados deve ser dimensionado adequadamente para lidar com o crescimento dos dados ao longo do tempo.

Manutenção:
O código-fonte do site deve ser bem documentado e organizado para facilitar a manutenção e o desenvolvimento futuro.
Deve haver um sistema de backup regular para proteger os dados do site contra perda ou corrupção.

Privacidade e Conformidade:
O site deve cumprir as regulamentações de privacidade, como o GDPR, garantindo que os dados dos usuários sejam coletados, armazenados e processados de forma legal e ética.
Deve haver políticas claras de privacidade e termos de uso disponíveis para os usuários, explicando como seus dados serão tratados.

Disponibilidade:
O site deve estar disponível para acesso dos usuários a maior parte do tempo possível, com um tempo de inatividade mínimo planejado para manutenção.
Deve haver um sistema de monitoramento para detectar e resolver rapidamente problemas que possam afetar a disponibilidade do site.

Confiabilidade:
O sistema de login e controle de acesso deve ser confiável, garantindo que apenas usuários autorizados tenham acesso às áreas restritas do site.
As postagens no YouTube Studio devem ser confiavelmente enviadas e processadas pelo site intermediário, sem perda de dados.

Compatibilidade:
O site deve ser compatível com uma variedade de navegadores da web para garantir uma experiência consistente para os usuários.
Deve ser responsivo para se adaptar a diferentes tamanhos de tela e dispositivos, incluindo desktops, tablets e smartphones.
import { useState } from 'react';
import { DollarSign, TrendingUp, Calendar, Users, FileText, Download, Filter, Search, X, Check, Printer } from 'lucide-react';
import { NativeSelect } from '../ui/native-select';
import { toast } from 'sonner@2.0.3';

interface SaleRecord {
  id: string;
  animalId: string;
  animalName: string;
  animalRegistry: string;
  buyerName: string;
  buyerDocument: string;
  buyerCity: string;
  buyerState: string;
  saleDate: string;
  salePrice: number;
  paymentMethod: 'dinheiro' | 'transferencia' | 'parcelado' | 'permuta';
  saleType: 'direta' | 'leilao' | 'particular';
  auctionName?: string;
  contractSigned: boolean;
  transferComplete: boolean;
}

export function SalesHistoryTab() {
  const [selectedYear, setSelectedYear] = useState('');
  const [selectedType, setSelectedType] = useState('');
  const [selectedPayment, setSelectedPayment] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [showContractModal, setShowContractModal] = useState(false);
  const [showReceiptModal, setShowReceiptModal] = useState(false);
  const [selectedSale, setSelectedSale] = useState<SaleRecord | null>(null);

  const sales: SaleRecord[] = [
    {
      id: '1',
      animalId: '1',
      animalName: 'Estrela da Manhã',
      animalRegistry: '123456',
      buyerName: 'João Silva',
      buyerDocument: '123.456.789-00',
      buyerCity: 'Pouso Alegre',
      buyerState: 'MG',
      saleDate: '2024-12-05',
      salePrice: 75000,
      paymentMethod: 'transferencia',
      saleType: 'leilao',
      auctionName: 'Leilão de Potros Jovens',
      contractSigned: true,
      transferComplete: true,
    },
    {
      id: '2',
      animalId: '2',
      animalName: 'Trovão Negro',
      animalRegistry: '123457',
      buyerName: 'Haras Santa Rita',
      buyerDocument: '12.345.678/0001-00',
      buyerCity: 'Varginha',
      buyerState: 'MG',
      saleDate: '2024-12-05',
      salePrice: 85000,
      paymentMethod: 'transferencia',
      saleType: 'leilao',
      auctionName: 'Leilão de Potros Jovens',
      contractSigned: true,
      transferComplete: true,
    },
    {
      id: '3',
      animalId: '5',
      animalName: 'Bella Vista',
      animalRegistry: '123460',
      buyerName: 'Carlos Mendes',
      buyerDocument: '987.654.321-00',
      buyerCity: 'Belo Horizonte',
      buyerState: 'MG',
      saleDate: '2024-10-15',
      salePrice: 65000,
      paymentMethod: 'parcelado',
      saleType: 'direta',
      contractSigned: true,
      transferComplete: false,
    },
    {
      id: '4',
      animalId: '3',
      animalName: 'Lua Cheia',
      animalRegistry: '123458',
      buyerName: 'Fazenda Boa Esperança',
      buyerDocument: '98.765.432/0001-00',
      buyerCity: 'Três Corações',
      buyerState: 'MG',
      saleDate: '2024-09-20',
      salePrice: 55000,
      paymentMethod: 'dinheiro',
      saleType: 'particular',
      contractSigned: true,
      transferComplete: true,
    },
  ];

  const filteredSales = sales.filter((sale) => {
    if (selectedYear && !sale.saleDate.startsWith(selectedYear)) return false;
    if (selectedType && sale.saleType !== selectedType) return false;
    if (selectedPayment && sale.paymentMethod !== selectedPayment) return false;
    if (searchQuery && !sale.animalName.toLowerCase().includes(searchQuery.toLowerCase()) && 
        !sale.buyerName.toLowerCase().includes(searchQuery.toLowerCase())) return false;
    return true;
  });

  // Estatísticas
  const totalSales = filteredSales.length;
  const totalRevenue = filteredSales.reduce((sum, sale) => sum + sale.salePrice, 0);
  const avgSalePrice = totalSales > 0 ? totalRevenue / totalSales : 0;
  const pendingTransfers = filteredSales.filter(s => !s.transferComplete).length;

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(value);
  };

  const formatDate = (dateStr: string) => {
    const [year, month, day] = dateStr.split('-');
    return `${day}/${month}/${year}`;
  };

  const saleTypeConfig = {
    'direta': { label: 'Venda Direta', color: 'bg-blue-500' },
    'leilao': { label: 'Leilão', color: 'bg-purple-500' },
    'particular': { label: 'Particular', color: 'bg-amber-500' },
  };

  const paymentMethodConfig = {
    'dinheiro': 'Dinheiro',
    'transferencia': 'Transferência',
    'parcelado': 'Parcelado',
    'permuta': 'Permuta',
  };

  const handleViewContract = (sale: SaleRecord) => {
    setSelectedSale(sale);
    setShowContractModal(true);
  };

  const handleGenerateReceipt = (sale: SaleRecord) => {
    setSelectedSale(sale);
    setShowReceiptModal(true);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h3 className="text-xl text-foreground dark:text-white">Histórico de Vendas</h3>
          <p className="text-sm text-muted-foreground dark:text-[#99a1af] mt-1">
            {filteredSales.length} {filteredSales.length === 1 ? 'venda' : 'vendas'} registrada(s)
          </p>
        </div>
        <button className="px-4 py-2 border border-border dark:border-[#333333] text-foreground dark:text-white rounded-lg hover:bg-muted dark:hover:bg-[#0d0d0d] transition-colors flex items-center gap-2">
          <Download className="w-4 h-4" />
          Exportar Relatório
        </button>
      </div>

      {/* Estatísticas */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-card dark:bg-[#1a1a1a] rounded-xl p-4 border border-border dark:border-[rgba(255,255,255,0.1)]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-emerald-500/20 rounded-lg flex items-center justify-center">
              <DollarSign className="w-5 h-5 text-emerald-500" />
            </div>
            <div>
              <p className="text-2xl font-bold text-foreground dark:text-white">{totalSales}</p>
              <p className="text-xs text-muted-foreground dark:text-[#99a1af]">Total de Vendas</p>
            </div>
          </div>
        </div>

        <div className="bg-card dark:bg-[#1a1a1a] rounded-xl p-4 border border-border dark:border-[rgba(255,255,255,0.1)]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center">
              <TrendingUp className="w-5 h-5 text-blue-500" />
            </div>
            <div>
              <p className="text-lg font-bold text-foreground dark:text-white">{formatCurrency(totalRevenue)}</p>
              <p className="text-xs text-muted-foreground dark:text-[#99a1af]">Receita Total</p>
            </div>
          </div>
        </div>

        <div className="bg-card dark:bg-[#1a1a1a] rounded-xl p-4 border border-border dark:border-[rgba(255,255,255,0.1)]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-purple-500/20 rounded-lg flex items-center justify-center">
              <DollarSign className="w-5 h-5 text-purple-500" />
            </div>
            <div>
              <p className="text-lg font-bold text-foreground dark:text-white">{formatCurrency(avgSalePrice)}</p>
              <p className="text-xs text-muted-foreground dark:text-[#99a1af]">Preço Médio</p>
            </div>
          </div>
        </div>

        <div className="bg-card dark:bg-[#1a1a1a] rounded-xl p-4 border border-border dark:border-[rgba(255,255,255,0.1)]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-amber-500/20 rounded-lg flex items-center justify-center">
              <FileText className="w-5 h-5 text-amber-500" />
            </div>
            <div>
              <p className="text-2xl font-bold text-foreground dark:text-white">{pendingTransfers}</p>
              <p className="text-xs text-muted-foreground dark:text-[#99a1af]">Transferências Pendentes</p>
            </div>
          </div>
        </div>
      </div>

      {/* Filtros */}
      <div className="bg-card dark:bg-[#1a1a1a] rounded-xl p-4 border border-border dark:border-[rgba(255,255,255,0.1)]">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground dark:text-[#99a1af]" />
            <input
              type="text"
              placeholder="Buscar animal ou comprador..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-background dark:bg-[#0d0d0d] border border-border dark:border-[#3a3a3a] rounded-lg text-foreground dark:text-white placeholder:text-muted-foreground dark:placeholder:text-[#6b6b6b] focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-white/20"
            />
          </div>

          <NativeSelect
            value={selectedYear}
            onChange={(e) => setSelectedYear(e.target.value)}
            className="w-full"
          >
            <option value="">Todos os Anos</option>
            <option value="2024">2024</option>
            <option value="2023">2023</option>
            <option value="2022">2022</option>
          </NativeSelect>

          <NativeSelect
            value={selectedType}
            onChange={(e) => setSelectedType(e.target.value)}
            className="w-full"
          >
            <option value="">Todos os Tipos</option>
            <option value="direta">Venda Direta</option>
            <option value="leilao">Leilão</option>
            <option value="particular">Particular</option>
          </NativeSelect>

          <NativeSelect
            value={selectedPayment}
            onChange={(e) => setSelectedPayment(e.target.value)}
            className="w-full"
          >
            <option value="">Todos os Pagamentos</option>
            <option value="dinheiro">Dinheiro</option>
            <option value="transferencia">Transferência</option>
            <option value="parcelado">Parcelado</option>
            <option value="permuta">Permuta</option>
          </NativeSelect>
        </div>
      </div>

      {/* Lista de Vendas */}
      <div className="space-y-4">
        {filteredSales.length > 0 ? (
          filteredSales.map((sale) => (
            <SaleCard 
              key={sale.id} 
              sale={sale} 
              formatCurrency={formatCurrency}
              formatDate={formatDate}
              saleTypeConfig={saleTypeConfig}
              paymentMethodConfig={paymentMethodConfig}
              onViewContract={handleViewContract}
              onGenerateReceipt={handleGenerateReceipt}
            />
          ))
        ) : (
          <div className="text-center py-12 bg-card dark:bg-[#1a1a1a] rounded-xl border border-border dark:border-[rgba(255,255,255,0.1)]">
            <FileText className="w-12 h-12 text-muted-foreground dark:text-[#99a1af] mx-auto mb-4 opacity-50" />
            <p className="text-muted-foreground dark:text-[#99a1af]">
              Nenhuma venda encontrada com os filtros selecionados
            </p>
          </div>
        )}
      </div>

      {/* Modal: Ver Contrato */}
      {showContractModal && selectedSale && (
        <ContractModal 
          sale={selectedSale} 
          onClose={() => setShowContractModal(false)}
          formatCurrency={formatCurrency}
          formatDate={formatDate}
        />
      )}

      {/* Modal: Gerar Recibo */}
      {showReceiptModal && selectedSale && (
        <ReceiptModal 
          sale={selectedSale} 
          onClose={() => setShowReceiptModal(false)}
          formatCurrency={formatCurrency}
          formatDate={formatDate}
        />
      )}
    </div>
  );
}

interface SaleCardProps {
  sale: SaleRecord;
  formatCurrency: (value: number) => string;
  formatDate: (dateStr: string) => string;
  saleTypeConfig: any;
  paymentMethodConfig: any;
  onViewContract: (sale: SaleRecord) => void;
  onGenerateReceipt: (sale: SaleRecord) => void;
}

function SaleCard({
  sale,
  formatCurrency,
  formatDate,
  saleTypeConfig,
  paymentMethodConfig,
  onViewContract,
  onGenerateReceipt,
}: SaleCardProps) {
  const typeInfo = saleTypeConfig[sale.saleType];

  return (
    <div className="bg-card dark:bg-[#1a1a1a] rounded-2xl p-6 border border-border dark:border-[rgba(255,255,255,0.1)] hover:border-[#3a3a3a] transition-all">
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 bg-muted dark:bg-[#3a3a3a] rounded-lg flex items-center justify-center">
            <div className="w-10 h-10 bg-[#6b7280] rounded-full" />
          </div>
          <div>
            <h4 className="text-lg text-foreground dark:text-white font-medium mb-1">
              {sale.animalName}
            </h4>
            <p className="text-sm text-muted-foreground dark:text-[#99a1af]">
              Reg: {sale.animalRegistry}
            </p>
          </div>
        </div>
        <div className="text-right">
          <p className="text-2xl font-bold text-emerald-500 mb-1">{formatCurrency(sale.salePrice)}</p>
          <span className={`${typeInfo.color} text-white px-3 py-1 rounded-md text-xs font-medium`}>
            {typeInfo.label}
          </span>
        </div>
      </div>

      {/* Informações */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <Calendar className="w-4 h-4 text-muted-foreground dark:text-[#99a1af]" />
            <p className="text-xs text-muted-foreground dark:text-[#99a1af]">Data da Venda</p>
          </div>
          <p className="text-sm text-foreground dark:text-white">{formatDate(sale.saleDate)}</p>
        </div>

        <div>
          <div className="flex items-center gap-2 mb-1">
            <DollarSign className="w-4 h-4 text-muted-foreground dark:text-[#99a1af]" />
            <p className="text-xs text-muted-foreground dark:text-[#99a1af]">Forma de Pagamento</p>
          </div>
          <p className="text-sm text-foreground dark:text-white">{paymentMethodConfig[sale.paymentMethod]}</p>
        </div>

        <div>
          <div className="flex items-center gap-2 mb-1">
            <Users className="w-4 h-4 text-muted-foreground dark:text-[#99a1af]" />
            <p className="text-xs text-muted-foreground dark:text-[#99a1af]">Comprador</p>
          </div>
          <p className="text-sm text-foreground dark:text-white font-medium">{sale.buyerName}</p>
          <p className="text-xs text-muted-foreground dark:text-[#99a1af]">
            {sale.buyerCity}/{sale.buyerState}
          </p>
        </div>
      </div>

      {/* Leilão */}
      {sale.auctionName && (
        <div className="bg-muted dark:bg-[#0d0d0d] rounded-lg p-3 mb-4">
          <p className="text-xs text-muted-foreground dark:text-[#99a1af] mb-1">Leilão</p>
          <p className="text-sm text-foreground dark:text-white">{sale.auctionName}</p>
        </div>
      )}

      {/* Status */}
      <div className="flex items-center gap-4 pt-4 border-t border-border dark:border-[rgba(255,255,255,0.1)]">
        <div className="flex items-center gap-2">
          {sale.contractSigned ? (
            <>
              <div className="w-2 h-2 bg-emerald-500 rounded-full" />
              <span className="text-xs text-emerald-500">Contrato Assinado</span>
            </>
          ) : (
            <>
              <div className="w-2 h-2 bg-amber-500 rounded-full" />
              <span className="text-xs text-amber-500">Contrato Pendente</span>
            </>
          )}
        </div>
        <div className="flex items-center gap-2">
          {sale.transferComplete ? (
            <>
              <div className="w-2 h-2 bg-emerald-500 rounded-full" />
              <span className="text-xs text-emerald-500">Transferência Concluída</span>
            </>
          ) : (
            <>
              <div className="w-2 h-2 bg-amber-500 rounded-full" />
              <span className="text-xs text-amber-500">Transferência Pendente</span>
            </>
          )}
        </div>
      </div>

      {/* Ações */}
      <div className="flex gap-2 mt-4">
        <button 
          onClick={() => onViewContract(sale)}
          className="flex-1 px-4 py-2 border border-border dark:border-[#333333] text-foreground dark:text-white rounded-lg hover:bg-muted dark:hover:bg-[#0d0d0d] transition-colors flex items-center justify-center gap-2"
        >
          <FileText className="w-4 h-4" />
          Ver Contrato
        </button>
        <button 
          onClick={() => onGenerateReceipt(sale)}
          className="flex-1 px-4 py-2 bg-white dark:bg-white text-[#1a1a1a] rounded-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
        >
          <Download className="w-4 h-4" />
          Gerar Recibo
        </button>
      </div>
    </div>
  );
}

// Modal de Contrato
interface ContractModalProps {
  sale: SaleRecord;
  onClose: () => void;
  formatCurrency: (value: number) => string;
  formatDate: (dateStr: string) => string;
}

function ContractModal({ sale, onClose, formatCurrency, formatDate }: ContractModalProps) {
  const handlePrint = () => {
    window.print();
    toast.success('Contrato enviado para impressão');
  };

  const handleDownload = () => {
    toast.success('Download do contrato iniciado');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50" onClick={onClose}>
      <div
        className="bg-card dark:bg-[#1a1a1a] rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-border dark:border-[rgba(255,255,255,0.1)]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="sticky top-0 bg-card dark:bg-[#1a1a1a] border-b border-border dark:border-[rgba(255,255,255,0.1)] p-6 flex items-center justify-between">
          <div>
            <h2 className="text-xl text-foreground dark:text-white">Contrato de Compra e Venda</h2>
            <p className="text-sm text-muted-foreground dark:text-[#99a1af] mt-1">
              Animal: {sale.animalName} • Registro: {sale.animalRegistry}
            </p>
          </div>
          <button
            onClick={onClose}
            className="text-muted-foreground dark:text-[#99a1af] hover:text-foreground dark:hover:text-white"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Corpo do Contrato */}
        <div className="p-6 space-y-6">
          {/* Informações das Partes */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-muted dark:bg-[#0d0d0d] rounded-xl p-4">
              <h3 className="text-foreground dark:text-white font-medium mb-3">Vendedor</h3>
              <div className="space-y-2 text-sm">
                <p className="text-muted-foreground dark:text-[#99a1af]">Nome/Razão Social</p>
                <p className="text-foreground dark:text-white">Haras CriaHub</p>
                <p className="text-muted-foreground dark:text-[#99a1af] mt-3">CPF/CNPJ</p>
                <p className="text-foreground dark:text-white">12.345.678/0001-90</p>
                <p className="text-muted-foreground dark:text-[#99a1af] mt-3">Endereço</p>
                <p className="text-foreground dark:text-white">Fazenda São José, Km 12<br />Belo Horizonte - MG, CEP 30000-000</p>
              </div>
            </div>

            <div className="bg-muted dark:bg-[#0d0d0d] rounded-xl p-4">
              <h3 className="text-foreground dark:text-white font-medium mb-3">Comprador</h3>
              <div className="space-y-2 text-sm">
                <p className="text-muted-foreground dark:text-[#99a1af]">Nome/Razão Social</p>
                <p className="text-foreground dark:text-white">{sale.buyerName}</p>
                <p className="text-muted-foreground dark:text-[#99a1af] mt-3">CPF/CNPJ</p>
                <p className="text-foreground dark:text-white">{sale.buyerDocument}</p>
                <p className="text-muted-foreground dark:text-[#99a1af] mt-3">Cidade/Estado</p>
                <p className="text-foreground dark:text-white">{sale.buyerCity} - {sale.buyerState}</p>
              </div>
            </div>
          </div>

          {/* Objeto da Venda */}
          <div className="bg-muted dark:bg-[#0d0d0d] rounded-xl p-4">
            <h3 className="text-foreground dark:text-white font-medium mb-3">Objeto da Venda</h3>
            <div className="space-y-2 text-sm">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-muted-foreground dark:text-[#99a1af]">Animal</p>
                  <p className="text-foreground dark:text-white">{sale.animalName}</p>
                </div>
                <div>
                  <p className="text-muted-foreground dark:text-[#99a1af]">Registro ABCCMM</p>
                  <p className="text-foreground dark:text-white">{sale.animalRegistry}</p>
                </div>
                <div>
                  <p className="text-muted-foreground dark:text-[#99a1af]">Raça</p>
                  <p className="text-foreground dark:text-white">Mangalarga Marchador</p>
                </div>
                <div>
                  <p className="text-muted-foreground dark:text-[#99a1af]">Pelagem</p>
                  <p className="text-foreground dark:text-white">Castanha</p>
                </div>
              </div>
            </div>
          </div>

          {/* Condições Financeiras */}
          <div className="bg-muted dark:bg-[#0d0d0d] rounded-xl p-4">
            <h3 className="text-foreground dark:text-white font-medium mb-3">Condições Financeiras</h3>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground dark:text-[#99a1af]">Valor da Venda</span>
                <span className="text-xl font-bold text-emerald-500">{formatCurrency(sale.salePrice)}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground dark:text-[#99a1af]">Forma de Pagamento</span>
                <span className="text-foreground dark:text-white">
                  {sale.paymentMethod === 'dinheiro' && 'À vista em dinheiro'}
                  {sale.paymentMethod === 'transferencia' && 'Transferência bancária'}
                  {sale.paymentMethod === 'parcelado' && 'Parcelado em 3x'}
                  {sale.paymentMethod === 'permuta' && 'Permuta'}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground dark:text-[#99a1af]">Data da Venda</span>
                <span className="text-foreground dark:text-white">{formatDate(sale.saleDate)}</span>
              </div>
            </div>
          </div>

          {/* Cláusulas */}
          <div className="space-y-4">
            <h3 className="text-foreground dark:text-white font-medium">Cláusulas Contratuais</h3>
            
            <div className="space-y-3 text-sm text-muted-foreground dark:text-[#99a1af]">
              <div>
                <p className="font-medium text-foreground dark:text-white mb-1">CLÁUSULA 1ª - DO OBJETO</p>
                <p>O VENDEDOR se compromete a vender ao COMPRADOR o animal descrito acima, livre e desembaraçado de qualquer ônus.</p>
              </div>

              <div>
                <p className="font-medium text-foreground dark:text-white mb-1">CLÁUSULA 2ª - DO PREÇO E PAGAMENTO</p>
                <p>O preço ajustado para a presente venda é de {formatCurrency(sale.salePrice)}, que será pago na forma descrita nas condições financeiras.</p>
              </div>

              <div>
                <p className="font-medium text-foreground dark:text-white mb-1">CLÁUSULA 3ª - DA TRANSFERÊNCIA</p>
                <p>O VENDEDOR se compromete a providenciar toda a documentação necessária para a transferência do animal junto à ABCCMM no prazo de 30 dias.</p>
              </div>

              <div>
                <p className="font-medium text-foreground dark:text-white mb-1">CLÁUSULA 4ª - DAS GARANTIAS</p>
                <p>O VENDEDOR garante que o animal encontra-se em perfeitas condições de saúde na data da venda, com exames veterinários atualizados.</p>
              </div>

              <div>
                <p className="font-medium text-foreground dark:text-white mb-1">CLÁUSULA 5ª - DO FORO</p>
                <p>Fica eleito o foro da comarca de Belo Horizonte/MG para dirimir quaisquer dúvidas oriundas do presente contrato.</p>
              </div>
            </div>
          </div>

          {/* Assinaturas */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-8">
            <div className="text-center">
              <div className="border-t-2 border-border dark:border-[#3a3a3a] pt-2 mb-2">
                <p className="text-sm text-foreground dark:text-white font-medium">Vendedor</p>
                <p className="text-xs text-muted-foreground dark:text-[#99a1af]">Haras CriaHub</p>
              </div>
            </div>
            <div className="text-center">
              <div className="border-t-2 border-border dark:border-[#3a3a3a] pt-2 mb-2">
                <p className="text-sm text-foreground dark:text-white font-medium">Comprador</p>
                <p className="text-xs text-muted-foreground dark:text-[#99a1af]">{sale.buyerName}</p>
              </div>
            </div>
          </div>

          <div className="text-center text-xs text-muted-foreground dark:text-[#99a1af] pt-4">
            <p>Belo Horizonte, {formatDate(sale.saleDate)}</p>
          </div>
        </div>

        {/* Footer com ações */}
        <div className="sticky bottom-0 bg-card dark:bg-[#1a1a1a] border-t border-border dark:border-[rgba(255,255,255,0.1)] p-6">
          <div className="flex flex-col lg:flex-row gap-3">
            <button
              onClick={onClose}
              className="flex-1 px-6 py-3 border border-border dark:border-[rgba(255,255,255,0.1)] text-foreground dark:text-white rounded-xl hover:bg-muted dark:hover:bg-[#0d0d0d] transition-colors"
            >
              Fechar
            </button>
            <button
              onClick={handlePrint}
              className="flex-1 px-6 py-3 border border-border dark:border-[rgba(255,255,255,0.1)] text-foreground dark:text-white rounded-xl hover:bg-muted dark:hover:bg-[#0d0d0d] transition-colors flex items-center justify-center gap-2"
            >
              <Printer className="w-5 h-5" />
              Imprimir
            </button>
            <button
              onClick={handleDownload}
              className="flex-1 px-6 py-3 bg-primary dark:bg-white text-white dark:text-black rounded-xl hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
            >
              <Download className="w-5 h-5" />
              Baixar PDF
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// Modal de Recibo
interface ReceiptModalProps {
  sale: SaleRecord;
  onClose: () => void;
  formatCurrency: (value: number) => string;
  formatDate: (dateStr: string) => string;
}

function ReceiptModal({ sale, onClose, formatCurrency, formatDate }: ReceiptModalProps) {
  const handleGenerate = () => {
    toast.success('Recibo gerado com sucesso!');
    onClose();
  };

  const handlePrint = () => {
    window.print();
    toast.success('Recibo enviado para impressão');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50" onClick={onClose}>
      <div
        className="bg-card dark:bg-[#1a1a1a] rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto border border-border dark:border-[rgba(255,255,255,0.1)]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="sticky top-0 bg-card dark:bg-[#1a1a1a] border-b border-border dark:border-[rgba(255,255,255,0.1)] p-6 flex items-center justify-between">
          <h2 className="text-xl text-foreground dark:text-white">Gerar Recibo de Venda</h2>
          <button
            onClick={onClose}
            className="text-muted-foreground dark:text-[#99a1af] hover:text-foreground dark:hover:text-white"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Preview do Recibo */}
        <div className="p-6 space-y-6">
          {/* Cabeçalho do Recibo */}
          <div className="text-center border-b border-border dark:border-[rgba(255,255,255,0.1)] pb-6">
            <h3 className="text-2xl font-bold text-foreground dark:text-white mb-2">RECIBO DE VENDA</h3>
            <p className="text-lg text-emerald-500 font-bold">{formatCurrency(sale.salePrice)}</p>
            <p className="text-sm text-muted-foreground dark:text-[#99a1af] mt-1">
              {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(sale.salePrice).replace('R$', '')} reais
            </p>
          </div>

          {/* Corpo do Recibo */}
          <div className="bg-muted dark:bg-[#0d0d0d] rounded-xl p-6 space-y-4 text-sm">
            <p className="text-foreground dark:text-white leading-relaxed">
              Recebi de <strong>{sale.buyerName}</strong>, inscrito no CPF/CNPJ sob o nº <strong>{sale.buyerDocument}</strong>,
              residente em <strong>{sale.buyerCity}/{sale.buyerState}</strong>, a quantia de <strong>{formatCurrency(sale.salePrice)}</strong>,
              referente à venda do animal da raça Mangalarga Marchador, de nome <strong>{sale.animalName}</strong>,
              registro ABCCMM nº <strong>{sale.animalRegistry}</strong>.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-border dark:border-[rgba(255,255,255,0.1)]">
              <div>
                <p className="text-muted-foreground dark:text-[#99a1af] mb-1">Data da Venda</p>
                <p className="text-foreground dark:text-white">{formatDate(sale.saleDate)}</p>
              </div>
              <div>
                <p className="text-muted-foreground dark:text-[#99a1af] mb-1">Forma de Pagamento</p>
                <p className="text-foreground dark:text-white">
                  {sale.paymentMethod === 'dinheiro' && 'Dinheiro'}
                  {sale.paymentMethod === 'transferencia' && 'Transferência Bancária'}
                  {sale.paymentMethod === 'parcelado' && 'Parcelado'}
                  {sale.paymentMethod === 'permuta' && 'Permuta'}
                </p>
              </div>
            </div>

            <p className="text-muted-foreground dark:text-[#99a1af] text-xs pt-4">
              Para maior clareza, firmo o presente recibo que dou plena, geral e irrevogável quitação da importância acima especificada.
            </p>
          </div>

          {/* Assinatura */}
          <div className="text-center pt-8">
            <div className="border-t-2 border-border dark:border-[#3a3a3a] max-w-md mx-auto pt-2">
              <p className="text-sm text-foreground dark:text-white font-medium">Vendedor</p>
              <p className="text-xs text-muted-foreground dark:text-[#99a1af]">Haras CriaHub</p>
              <p className="text-xs text-muted-foreground dark:text-[#99a1af]">CNPJ: 12.345.678/0001-90</p>
            </div>
            <p className="text-xs text-muted-foreground dark:text-[#99a1af] mt-6">
              {formatDate(sale.saleDate)}
            </p>
          </div>
        </div>

        {/* Footer com ações */}
        <div className="sticky bottom-0 bg-card dark:bg-[#1a1a1a] border-t border-border dark:border-[rgba(255,255,255,0.1)] p-6">
          <div className="flex flex-col lg:flex-row gap-3">
            <button
              onClick={onClose}
              className="flex-1 px-6 py-3 border border-border dark:border-[rgba(255,255,255,0.1)] text-foreground dark:text-white rounded-xl hover:bg-muted dark:hover:bg-[#0d0d0d] transition-colors"
            >
              Cancelar
            </button>
            <button
              onClick={handlePrint}
              className="flex-1 px-6 py-3 border border-border dark:border-[rgba(255,255,255,0.1)] text-foreground dark:text-white rounded-xl hover:bg-muted dark:hover:bg-[#0d0d0d] transition-colors flex items-center justify-center gap-2"
            >
              <Printer className="w-5 h-5" />
              Imprimir
            </button>
            <button
              onClick={handleGenerate}
              className="flex-1 px-6 py-3 bg-primary dark:bg-white text-white dark:text-black rounded-xl hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
            >
              <Download className="w-5 h-5" />
              Gerar e Baixar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

interface DataWargaType {
  id: string;
  nama: string;
  nik: string;
  nomor: string;
  alamat: {
    dusun: string;
    rtRw: string;
  };
}

export const dataWarga: DataWargaType[] = [
  {
    id: '01',
    nama: 'Budi Santoso',
    nik: '3524784520220414',
    nomor: '081234567890',
    alamat: {
      dusun: 'Dusun Krajan',
      rtRw: 'RT 01/RW 02'
    }
  },
  {
    id: '02',
    nama: 'Ani Lestari',
    nik: '3524784520220415',
    nomor: '082234567891',
    alamat: {
      dusun: 'Dusun Timur',
      rtRw: 'RT 03/RW 04'
    }
  },
  {
    id: '03',
    nama: 'Sigit Prabowo',
    nik: '3524784520220416',
    nomor: '083234567892',
    alamat: {
      dusun: 'Dusun Barat',
      rtRw: 'RT 02/RW 01'
    }
  },
  {
    id: '04',
    nama: 'Dewi Kusuma',
    nik: '3524784520220417',
    nomor: '084234567893',
    alamat: {
      dusun: 'Dusun Selatan',
      rtRw: 'RT 05/RW 03'
    }
  },
  {
    id: '05',
    nama: 'Joko Widodo',
    nik: '3524784520220418',
    nomor: '085234567894',
    alamat: {
      dusun: 'Dusun Utara',
      rtRw: 'RT 04/RW 02'
    }
  }
];
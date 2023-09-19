 import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import Pegawai from 'App/Models/Pegawai';

export default class PegawaisController {

  public async index({}: HttpContextContract) {
    const pegawai = await Pegawai.query();

    return pegawai;
  }

  public async store({request, response}: HttpContextContract) {
    const {nama, gender, tinggiBadan, hobi} = request.body()

    const pegawai = await Pegawai.create({
        nama,
        gender, 
        tinggiBadan,
        hobi
    });

    return response.ok({
        message: 'Data berhasil tersimpan',
        data: pegawai,
    });
  }

  public async show({}: HttpContextContract) {}

  public async update({request, response, params: {id}}: HttpContextContract) {
    const {nama, gender, tinggiBadan, hobi} = request.body();

    const pegawai = await Pegawai.query().where({id}).update({
        nama, gender, tinggiBadan, hobi
    })

    return response.ok({
        message: 'Data berhasil terupdate',
        data: pegawai,
       });
  }
    


  public async destroy({response, params: {id}}: HttpContextContract) {
   const pegawai =  await Pegawai.query().where({id}).delete()

   return response.ok({
        message: 'Data berhasil terhapus',
        data: pegawai,
    });
  }
}
